<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryRef" :inline="true" v-show="showSearch" label-width="68px">
      <el-form-item label="登录地址" prop="ipAddress">
        <el-input
          v-model="queryParams.ipAddress"
          placeholder="请输入登录地址"
          clearable
          style="width: 240px"
          @keyup.enter="handleQuery"
        />
      </el-form-item>
      <el-form-item label="用户名称" prop="username">
        <el-input
          v-model="queryParams.username"
          placeholder="请输入用户名称"
          clearable
          style="width: 240px"
          @keyup.enter="handleQuery"
        />
      </el-form-item>
      <el-form-item label="状态" prop="status">
        <el-select v-model="queryParams.status" placeholder="登录状态" clearable style="width: 240px">
          <el-option v-for="dict in sys_login_status" :key="dict.value" :label="dict.label" :value="dict.value" />
        </el-select>
      </el-form-item>
      <el-form-item label="登录时间" style="width: 308px">
        <el-date-picker
          v-model="dateRange"
          value-format="YYYY-MM-DD"
          type="daterange"
          range-separator="-"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        ></el-date-picker>
        <el-input v-show="false"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="Search" @click="handleQuery">搜索</el-button>
        <el-button icon="Refresh" @click="resetQuery">重置</el-button>
      </el-form-item>
    </el-form>

    <el-row :gutter="10" class="mb8">
      <el-col :span="1.5">
        <el-button
          type="danger"
          plain
          icon="Delete"
          :disabled="multiple"
          @click="handleDelete"
          v-hasPermission="['system:logininfor:remove']"
          >删除</el-button
        >
      </el-col>
      <el-col :span="1.5">
        <el-button type="danger" plain icon="Delete" @click="handleClean" v-hasPermission="['system:logininfor:remove']"
          >清空</el-button
        >
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
          plain
          icon="Download"
          @click="handleExport"
          v-hasPermission="['system:logininfor:export']"
          >导出</el-button
        >
      </el-col>
      <right-toolbar v-model:showSearch="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table
      ref="logininforRef"
      v-loading="loading"
      :data="logininforList"
      @selection-change="handleSelectionChange"
      @sort-change="handleSortChange"
    >
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="访问编号" align="center" prop="infoId" />
      <el-table-column
        label="用户名称"
        align="center"
        prop="username"
        :show-overflow-tooltip="true"
        sortable="custom"
        :sort-orders="['descending', 'ascending']"
      />
      <el-table-column label="地址" align="center" prop="ipAddress" :show-overflow-tooltip="true" />
      <el-table-column label="登录地点" align="center" prop="loginLocation" :show-overflow-tooltip="true" />
      <el-table-column label="操作系统" align="center" prop="operationSystem" :show-overflow-tooltip="true" />
      <el-table-column label="浏览器" align="center" prop="browser" :show-overflow-tooltip="true" />
      <el-table-column label="登录状态" align="center" prop="status">
        <template #default="scope">
          <dict-tag :options="sys_login_status" :value="scope.row.status" />
        </template>
      </el-table-column>
      <el-table-column label="描述" align="center" prop="msg" />
      <el-table-column label="访问时间" align="center" prop="loginTime" sortable="custom" width="180">
        <template #default="scope">
          <span>{{ parseTime(scope.row.loginTime) }}</span>
        </template>
      </el-table-column>
    </el-table>

    <pagination
      v-show="total > 0"
      :total="total"
      v-model:page="queryParams.pageNum"
      v-model:limit="queryParams.pageSize"
      @pagination="getList"
    />
  </div>
</template>

<script setup name="Logininfor">
import * as loginInfoApi from '@/api/monitor/loginInfoApi';

const { proxy } = getCurrentInstance();
const { sys_login_status } = proxy.useDict('sys_login_status');

const logininforList = ref([]);
const loading = ref(true);
const showSearch = ref(true);
const ids = ref([]);
const multiple = ref(true);
const total = ref(0);
const dateRange = ref([]);
const defaultSort = ref({ prop: 'loginTime', order: 'descending' });

// 查询参数
const queryParams = ref({
  pageNum: 1,
  pageSize: 10,
  ipAddress: undefined,
  username: undefined,
  status: undefined,
  orderByColumn: defaultSort.value.prop,
  isAsc: defaultSort.value.order,
});

/** 查询登录日志列表 */
function getList() {
  loading.value = true;
  loginInfoApi
    .list(proxy.addTimeRange(queryParams.value, dateRange.value))
    .then((response) => {
      logininforList.value = response.rows;
      total.value = response.total;
    })
    .finally(() => {
      loading.value = false;
    });
}
/** 搜索按钮操作 */
function handleQuery() {
  queryParams.value.pageNum = 1;
  getList();
}
/** 重置按钮操作 */
function resetQuery() {
  dateRange.value = [];
  proxy.resetForm('queryRef');
  proxy.$refs.logininforRef.sort(defaultSort.value.prop, defaultSort.value.order);
  handleQuery();
}
/** 多选框选中数据 */
function handleSelectionChange(selection) {
  ids.value = selection.map((item) => item.infoId);
  multiple.value = !selection.length;
}
/** 排序触发事件 */
function handleSortChange(column, prop, order) {
  queryParams.value.orderByColumn = column.prop;
  queryParams.value.isAsc = column.order;
  getList();
}
/** 删除按钮操作 */
function handleDelete(row) {
  const infoIds = row.infoId || ids.value;
  proxy.$modal
    .confirm(`是否确认删除访问编号为"${infoIds}"的数据项?`)
    .then(() => loginInfoApi.deleteLoginInfo(infoIds))
    .then(() => {
      getList();
      proxy.$modal.msgSuccess('删除成功');
    })
    .catch(() => {});
}
/** 清空按钮操作 */
function handleClean() {
  proxy.$modal
    .confirm('是否确认清空所有登录日志数据项?')
    .then(() => loginInfoApi.deleteAll())
    .then(() => {
      getList();
      proxy.$modal.msgSuccess('清空成功');
    })
    .catch(() => {});
}
/** 导出按钮操作 */
function handleExport() {
  proxy.download(
    'loginInfo/export',
    {
      ...queryParams.value,
    },
    `loginInfo_${new Date().getTime()}.xlsx`,
  );
}

getList();
</script>

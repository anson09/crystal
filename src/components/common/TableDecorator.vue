<template>
  <div>
    <div class="controller">
      <el-select
        v-if="customHeader"
        v-model="columns"
        size="small"
        multiple
        collapse-tags
        placeholder="选择列"
      >
        <el-option
          v-for="item in header"
          :key="item.prop"
          :label="item.label"
          :value="item.prop"
        >
        </el-option>
      </el-select>
      <el-button
        v-if="fold"
        :icon="isFold ? 'el-icon-caret-bottom' : 'el-icon-caret-top'"
        circle
        plain
        size="mini"
        @click="isFold = !isFold"
      ></el-button>
    </div>
    <div :class="{ fold: isFold }"><slot></slot></div>
  </div>
</template>

<script>
export default {
  name: "TableDecorator",
  props: {
    fold: Boolean,
    customHeader: Boolean
  },
  data() {
    return {
      isFold: this.fold,
      header: this.$parent.header.slice(),
      columns: this.$parent.header.filter(i => !i.hide).map(i => i.prop)
    };
  },
  watch: {
    columns: {
      handler() {
        this.$parent.header = this.header.filter(i =>
          this.columns.includes(i.prop)
        );
      },
      immediate: true
    }
  }
};
</script>

<style lang="scss" scoped>
.controller {
  float: right;
  margin-bottom: 2px;

  > * {
    margin-left: 10px;
  }
}

.el-select {
  width: 280px;
}

::v-deep .el-table__body-wrapper {
  max-height: 10000px;
  transition: max-height 0.5s;
}

.fold ::v-deep {
  .el-table {
    height: unset !important;
    .el-table__body-wrapper {
      max-height: 0px;
    }
  }
}
</style>

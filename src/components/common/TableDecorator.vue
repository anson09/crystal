<template>
  <div>
    <div class="controller">
      <el-dropdown v-if="customHeader" :hide-on-click="false">
        <el-button plain size="small">
          <i class="iconfont icon-menu"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item v-for="item in header" :key="item.prop"
            ><el-checkbox
              :checked="columns.includes(item.prop)"
              @change="change(item.prop)"
              >{{ item.label }}</el-checkbox
            >
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-button v-if="fold" plain size="small" @click="isFold = !isFold">
        <span v-if="isFold">全部展开</span>
        <span v-else>全部折叠</span>
      </el-button>
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
  },
  methods: {
    change(prop) {
      if (this.columns.includes(prop)) {
        this.columns = this.columns.filter(i => i !== prop);
      } else {
        this.columns.push(prop);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.controller {
  float: left;
  margin-bottom: 7px;

  > * {
    margin-left: 10px;
  }
}

.iconfont {
  font-size: 12px;
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

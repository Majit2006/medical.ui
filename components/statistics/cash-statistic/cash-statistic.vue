<template>
  <div class="cash-statistic-wrapper" id="chart-demo">
    <span>{{ $t("statistic.payment") }}</span>
    <DxChart id="chart" :data-source="chartDataSource" pallette="Violet">
      <DxCommonSeriesSettings type="stackedbar" argument-field="date" />
      <DxSeries value-field="tmtPrice" :name="$t('statistic.currencyManat')" />
      <DxSeries
        value-field="tmtPrice"
        :name="$t('statistic.currencyManat')"
        stack="Manat"
      />
      <!-- <DxLegend
        value-field="usdPrice"
        horizontal-alignment="right"
        :name="$t('statistic.currencyDollar')"
        stack="Dollar"
      >
        <DxBorder :visible="true" />
      </DxLegend> -->
      <DxTooltip :enabled="true" />
    </DxChart>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {
  DxChart,
  DxSeries,
  DxCommonSeriesSettings,
  DxExport,
  DxBorder,
  DxGrid,
  DxMargin,
  DxLegend,
  DxTitle,
  DxSubtitle,
  DxTooltip,
} from "devextreme-vue/chart";
export default Vue.extend({
  components: {
    DxChart,
    DxSeries,
    DxCommonSeriesSettings,
    DxExport,
    DxBorder,
    DxGrid,
    DxMargin,
    DxLegend,
    DxTitle,
    DxSubtitle,
    DxTooltip,
  },
});
</script>
<style lang="scss" scoped>
#chart {
  width: 515px;
  height: 250px;
}
.show-statistic-btn {
  display: block;
  margin: 20px auto;
  padding: 12px 32px;
  border: none;
  border-radius: 10px;
  font-weight: $bold-weight;
  font-family: $fontFamily;
  cursor: pointer;
}

span {
  display: block;
  text-align: center;
  margin-bottom: 10px;
}
</style>

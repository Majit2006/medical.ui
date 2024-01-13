<template>
  <div>
    <div class="patient-statistic-wrapper">
      <span>{{ $t("statistic.patient") }}</span>
      <DxChart id="chart" :data-source="patientDataSource">
        <DxSeries
          argument-field="date"
          value-field="count"
          type="stackedbar"
          :name="$t('statistic.patient')"
        />
        <DxLegend
          :customize-items="customizeItems"
          :column-count="2"
          position="inside"
          horizontal-alignment="right"
        >
          <DxBorder :visible="true" />
        </DxLegend>
        <DxTooltip :enabled="true" />
      </DxChart>
      <button @click="showPatientStatistic" class="show-statistic-btn">
        {{ $t("commonText.show") }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {
  DxChart,
  DxSeries,
  DxCommonSeriesSettings,
  DxValueAxis,
  DxTitle,
  DxLegend,
  DxBorder,
  DxExport,
  DxTooltip,
} from "devextreme-vue/chart";

export default Vue.extend({
  components: {
    DxChart,
    DxSeries,
    DxCommonSeriesSettings,
    DxValueAxis,
    DxTitle,
    DxLegend,
    DxBorder,
    DxExport,
    DxTooltip,
  },
});
</script>
<style lang="scss" scoped>
span {
  display: block;
  text-align: center;
  margin-bottom: 10px;
}

#chart {
  height: 300px;
  width: 512px;
}

.show-statistic-btn {
  font-family: $fontFamily;
  display: block;
  margin: 20px auto;
  padding: 12px 32px;
  border: none;
  border-radius: 10px;
  font-weight: $bold-weight;
  cursor: pointer;

  &:active {
    box-shadow: inset 0 2px 2px 0 #333;
    transition: 0.1s ease-out;
    -webkit-box-shadow: inset 1px 1px 8px #333;
    -moz-box-shadow: inset 1px 1px 8px #333;
    box-shadow: inset 1px 1px 8px #333;
  }
}
</style>

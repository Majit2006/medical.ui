<template>
  <div class="dx-viewport">
    <DxDrawer
      id="navigation-menu-drawer"
      opened-state-mode="shrink"
      position="left"
      reveal-mode="slide"
      template="navigation-list"
      :shading="false"  
      :opened="true"
      :close-on-outside-click="false"
    >
      <template #navigation-list>
        <div>
          <div class="user-panel-wrapper">
            <UserPanel />
          </div>
          <ListMenu />
        </div>
      </template>
      <div id="main-content">
        <transition name="route">
          <Nuxt />
        </transition>
      </div>
    </DxDrawer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import DxDrawer from "devextreme-vue/drawer";
import ListMenu from "~/components/layout/list-menu.vue";
import UserPanel from "~/components/layout/user-panel.vue";

export default Vue.extend({
  components: {
    DxDrawer,
    ListMenu,
    UserPanel,
  },
});
</script>

<style lang="scss">
.dx-state-invisible {
  display: none;
}
#navigation-menu-drawer {
  flex-grow: 1;

  #main-content {
    width: 100%;
    height: 100%;
    padding: 10px 10px;
    position: relative;
    overflow-y: scroll;
    background-color: $custom-bg-color;
    .route-enter-active,
    .route-leave-active {
      transition: opacity 0.6s;
    }
    .route-enter,
    .route-leave-to {
      opacity: 0;
    }
  }
}
</style>

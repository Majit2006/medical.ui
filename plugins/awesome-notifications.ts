import Vue from "vue";
import { Plugin } from "@nuxt/types";
import VueAWN from "vue-awesome-notifications";

const accessor: Plugin = ({ app }) => {
  const options = {
    labels: {
      // info: app.i18n.t("notifications.awesomeNotifications.info"),
      // success: app.i18n.t("notifications.awesomeNotifications.success"),
      // alert: app.i18n.t("notifications.awesomeNotifications.alert"),
      // warning: app.i18n.t("notifications.awesomeNotifications.warning"),
      // async: app.i18n.t("notifications.awesomeNotifications.async"),
    },
    messages: {
      // info: app.i18n.t("notifications.awesomeNotifications.infoMessage"),
      // success: app.i18n.t("notifications.awesomeNotifications.successMessage"),
      // alert: app.i18n.t("notifications.awesomeNotifications.alertMessage"),
      // warning: app.i18n.t("notifications.awesomeNotifications.warningMessage"),
      // async: app.i18n.t("notifications.awesomeNotifications.asyncMessage"),
      // "async-block": app.i18n.t(
      //   "notifications.awesomeNotifications.asyncBlockMessage"
      // ),
    },
    position: "bottom-right",
  };

  Vue.use(VueAWN, options);
};

export default accessor;

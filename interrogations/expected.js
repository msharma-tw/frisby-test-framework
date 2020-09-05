

export default {
    async checkSuccessStatus() {
      return await SideNavElements.settings.exists();
    },
};
  
class Github {
  private modal: Window | null = null;

  private clientId = "4271ae7c6befad173947";

  openAuth() {
    const width = 640;
    const height = 840;
    const popupX = window.screen.width / 2 - width / 2;
    const popupY = window.screen.height / 2 - height / 2;

    this.modal = window.open(
      `https://github.com/login/oauth/authorize?client_id=${this.clientId}&scope=repo&redirect_url=https://ajou.codes/validate-github`,
      "github",
      `width=${width},height=${height},left=${popupX},top=${popupY},status=no,menubar=no,toolbar=no,resizable=no`
    );
  }

  closeAuth() {
    if (this.modal) {
      this.modal.close();
    }
  }
}

export default new Github();

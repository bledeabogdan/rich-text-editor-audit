export const toolbarOptions = {
  container: "#toolbar",
  handlers: {
    link: function (value) {
      if (value) {
        var href = prompt("Enter the URL");
        this.quill.format("link", href);
      } else {
        this.quill.format("link", false);
      }
    },
  },
};

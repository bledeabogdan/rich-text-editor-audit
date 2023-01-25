export let bindings = {
  custom: {
    key: "L",
    shortKey: true,
    handler: function (range, context) {
      if (context.empty && context.format.list) {
        this.quill.format("list", false);
      } else {
        this.quill.format("list", true);
      }
    },
  },
};

import nextra from "nextra";

const withNextra = nextra({
  defaultShowCopyCode: true,
});

// You can include other Next.js configuration options here, in addition to Nextra settings:
export default withNextra({
  output: "export",
  async redirects() {
    return [
      {
        source: "/",
        destination: "/resources",
        permanent: true,
      },
    ];
  },
});

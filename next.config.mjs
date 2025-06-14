import withSvgr from "next-plugin-svgr";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();


/** @type {import('next').NextConfig} */
const nextConfig = {
  svgrOptions: {
    svgoConfig: {
      plugins: [
        {
          name: "preset-default",
          params: {
            overrides: { removeViewBox: false },
          },
        },
      ],
    },
  },
};

export default withNextIntl(withSvgr(nextConfig));

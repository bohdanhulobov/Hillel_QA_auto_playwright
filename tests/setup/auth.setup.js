import { test as setup } from "@playwright/test";

const authFile = "playwright/.auth/user.json";

setup("authenticate", async ({ request }) => {
  await request.post(`/api/auth/signin`, {
    data: {
      email: process.env.PERSONAL_USERNAME,
      password: process.env.PERSONAL_PASSWORD,
      remember: true,
    },
  });

  await request.storageState({ path: authFile });
});

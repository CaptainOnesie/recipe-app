import type { ActionFunctionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";

import { logout } from "~/utils/session.server";

export const action = async ({
  request,
}: ActionFunctionArgs) => logout(request);

export const loader = async () => {
  redirect("/")
};

export default function Logout() {
  return (
    <div className="container">
      <div className="content" data-light="">
        <h1>Logging you out!</h1>
      </div>
    </div>
  );
}
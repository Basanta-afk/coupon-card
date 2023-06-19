export default function ({ route, redirect }) {
  if (route.path !== "/login" && route.path !== "/") {
    return redirect("/login");
  }
}

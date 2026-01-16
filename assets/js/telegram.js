<script>
const tg = window.Telegram.WebApp;
tg.expand();

const user = tg.initDataUnsafe.user;

window.telegramUser = {
  userId: user.id.toString(),
  username: user.username || "",
  name: `${user.first_name || ""} ${user.last_name || ""}`,
  photo: user.photo_url || ""
};
</script>

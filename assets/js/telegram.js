<script>
const tg = window.Telegram.WebApp;
tg.expand();

const u = tg.initDataUnsafe.user;
window.telegramUser = {
  userId: u.id.toString(),
  username: u.username || "",
  name: `${u.first_name || ""} ${u.last_name || ""}`,
  photo: u.photo_url || ""
};
</script>

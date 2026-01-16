<script>
const ADMINS = ["123456789"];
if (!ADMINS.includes(telegramUser.userId)) {
  document.body.innerHTML = "Access Denied";
}
</script>

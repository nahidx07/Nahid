<script>
const ADMINS = ["5024973191"];
if (!ADMINS.includes(telegramUser.userId)) {
  document.body.innerHTML = "Access Denied";
}
</script>

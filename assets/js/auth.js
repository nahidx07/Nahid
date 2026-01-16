<script type="module">
import { doc, getDoc, setDoc } from 
"https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

async function initUser(user) {
  const ref = doc(db, "users", user.userId.toString());
  const snap = await getDoc(ref);

  if (!snap.exists()) {
    await setDoc(ref, {
      userId: user.userId,
      username: user.username,
      name: user.name,
      photo: user.photo,
      points: 0,
      referralCode: "REF" + user.userId,
      createdAt: Date.now()
    });
  }
}

initUser(telegramUser);
</script>

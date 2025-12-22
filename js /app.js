// Landing continue button
document.getElementById('continueBtn').addEventListener('click', () => {
  document.getElementById('landing').classList.add('hidden');
  document.getElementById('mainApp').classList.remove('hidden');
});

// Add Friend
document.getElementById('addFriendBtn').addEventListener('click', async () => {
  const guestUid = document.getElementById('guestUid').value;
  const guestPassword = document.getElementById('guestPassword').value;
  const targetUid = document.getElementById('targetUid').value;

  const btn = document.getElementById('addFriendBtn');
  btn.disabled = true;
  btn.textContent = "Processing...";

  try {
    const data = await addFriend(guestUid, guestPassword, targetUid);
    document.getElementById('friendResult').innerText = JSON.stringify(data);
  } catch (err) {
    document.getElementById('friendResult').innerText = "Error: " + err;
  }

  btn.disabled = false;
  btn.textContent = "ADD FRIEND";
});

// Remove Friend
document.getElementById('removeFriendBtn').addEventListener('click', async () => {
  const guestUid = document.getElementById('guestUid').value;
  const guestPassword = document.getElementById('guestPassword').value;
  const targetUid = document.getElementById('targetUid').value;

  const btn = document.getElementById('removeFriendBtn');
  btn.disabled = true;
  btn.textContent = "Processing...";

  try {
    const data = await removeFriend(guestUid, guestPassword, targetUid);
    document.getElementById('friendResult').innerText = JSON.stringify(data);
  } catch (err) {
    document.getElementById('friendResult').innerText = "Error: " + err;
  }

  btn.disabled = false;
  btn.textContent = "REMOVE FRIEND";
});

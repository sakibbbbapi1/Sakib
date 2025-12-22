// Add Friend
async function addFriend(guestUid, guestPassword, targetUid) {
  const url = https://danger-add-friend.vercel.app/adding_friend?uid=${guestUid}&password=${guestPassword}&friend_uid=${targetUid};
  const res = await fetch(url);
  return res.json();
}

// Remove Friend
async function removeFriend(guestUid, guestPassword, targetUid) {
  const url = https://danger-add-friend.vercel.app/remove_friend?uid=${guestUid}&password=${guestPassword}&friend_uid=${targetUid};
  const res = await fetch(url);
  return res.json();
}

// Later you can add:
// Guild Join, Ban Check, Region Check, Guild Info, JWT Mode functions

user?.profilePic
Iska simple matlab hai:
👉 Agar user defined hai (i.e., null ya undefined nahi hai), tabhi profilePic access karo.
Agar user hi undefined ho, to code crash nahi karega, balkay silently undefined return kar dega.

But production ya dynamic data mein kisi bhi waqt missing data aa sakta hai, is liye:

🛡️ user?.profilePic = Defensive coding ✅

user?.profilePic ==
✔ Prevents crashes
✔ Clean, readable
✔ Best practice with unknown or async data
✔ Especially useful in React with data from APIs

Case	        Safe Access
Object Property	user?.name
Nested Object	user?.address?.city
Function Call	props.onSubmit?.()
Array Element	arr?.[0]?.title
JSON from API	data?.items?.[0]?.details?.url
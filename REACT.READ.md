# 📦 React Js Out of the Box

## 🛡️ React security best practices

### Keep an eye on malicious URLs and URL-based injection

- There can be URLs that might include dynamic script content through the **“JavaScript:”** protocol URL.
- Make sure to use **“http:”** or **“https:”** against **“JavaScript:”** URL-based script injection.
- Besides, you must also leverage a native URL parsing functionality to validate the URL. Post that, make sure to match the parsed protocol property with the allow list.

**Do's**

```javascript
function validateURL(url) {
  const parsed = new URL(url);
  return ["https:", "http:"].includes(parsed.protocol);
}

<a href={validateURL(url) ? url : ""}>Click here!</a>;
```

**Don't**

```javascript
<a href={attackerControlled}>Click here!</a>
```

---

### Always sanitize and render HTML

---

### Do not directly access DOM

---

### Ensure sever side rendering is secure

---

### Make sure to use non-vulnerable React versions

---

### Make use of linter configuration

---

### Do not use threatfull library codes

---

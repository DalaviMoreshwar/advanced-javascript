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

Use **dangerouslySetInnerHTML** for HTML insertion directly into rendered DOM nodes. Also, use a sanitization library like **domypurify** before using **dangerouslySetInnerHTML** prop.

To perform this.

```javascript
import purify from "dompurify";
<div dangerouslySetInnerHTML={{ __html: purify.sanitize(data) }} />;
```

---

### Do not directly access DOM

Never try to inject content into DOM nodes directly, and if left with no option than insertion, use **dangerouslySetInnerHTML** to inject by sanitizing it using domypurify.

Now you must be thinking about what is “**dangerouslySetInnerHTML**.”
Well, it is a property that helps React programmers to directly insert HTML content within an HTML element available in React application.

**Do's**

```javascript
import purify from "dompurify";
<div dangerouslySetInnerHTML={{ __html: purify.sanitize(data) }} />;
```

> [!TIP]
>
> **_Never use refs and findDomNode() for accessing rendered DOM elements to inject content through innerHTML and similar properties._**

**Don't**

```javascript
this.myRef.current.innerHTML = attackerControlledValue;
```

---

### Ensure sever side rendering is secure

Use server-side functions like **ReactDOMServer.renderToString()** and **ReactDOMServer.renderToStaticMarkup()** for data binding; since it offers automatic content escaping.

When using the **renderToStaticMarkup()** method in React, it is essential to avoid concatenating strings onto the output before sending them to the client for hydration.

Also, to prevent XSS, ensure you or your developer do not concatenate sanitized data with the output of **renderToStaticMarkup()**.

**Do's**

```javascript
app.get("/", function (req, res) {
  return res.send(
    ReactDOMServer.renderToStaticMarkup(
      React.createElement("h1", null, "Hello World!")
    ) + otherData
  );
});
```

---

### Make sure to use non-vulnerable React versions

As said in the title, do not use vulnerable React versions. Avoid vulnerable versions of React and react-dom by keeping a check on the latest version by leveraging npm.

---

### Make use of linter configuration

Another ReactJS security best practice is to install a linter configuration; since it automatically detects potential React security flaws in your code and advises on rectification.

Make sure to use the [ESLint React Security config](https://github.com/snyk-labs/eslint-config-react-security/) to identify react vulnerabilities in React code.

---

### Do not use threatfull library codes

Ensure you review library code manually or with the linter configuration to prevent malicious use of security mechanisms.

Make it a point to avoid leveraging React libraries that avoid using **dangerouslySetInnerHTML**, **innerHTML**, **unvalidated URLs**, or other unsafe patterns. Additionally, you can use security linters to your **node_modules** folders to proactively detect malicious patterns in React code.

---

[Refer Blog](https://www.bacancytechnology.com/blog/react-security-solutions)

---

## 🌱 React Design Patterns

[Refer Blog](https://www.bacancytechnology.com/blog/react-design-patterns)

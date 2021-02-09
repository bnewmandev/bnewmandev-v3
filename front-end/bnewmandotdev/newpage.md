# New Page

## Create a new jsx file in views

```jsx
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const PageName = (active) => {
	return (
		<div id="pagename">
			<Header active={active} />
			<h1 className="MAINHEADING">Page Name</h1>
			<Footer />
		</div>
	);
};
export default PageName;
```

## Open Header.jsx Component and append the following a tag

```jsx
<a
	href="/pagename"
	id="pageNameL"
	className={`${isActive.pagename ? "ORANGEBGCOL" : ""}`}
>
	Page Name
</a>
```

## Open Router.jsx and add the following route

```jsx
case "/pagename":
    resetActive();
    active.pagename = true;
    return <PageName active={active} />

```

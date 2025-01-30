import { LinkText } from "./LinkText"

export function BottomWarning ({text, linkText, url})
{
    return (
        <div className = "flex" >
            <div>{text}</div>
            <LinkText linktext = {linkText} url = {url} />
        </div>
    )
}
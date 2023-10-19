interface Props {
    title: string
}

export function Grid({title}:Props) {
    return <div>{title ?? 'no-title'}</div>
}

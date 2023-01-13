function Badge ({ name, className }: { name: string, className?: string }) {
    return <span className={`px-2 py-1 text-sm bg-black text-white rounded-sm self-start ${className}`}>{name}</span>;
}

export default Badge;
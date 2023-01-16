function ExternalLink ({ children, href }: { children: React.ReactNode, href: string }) {
    return <a target="_blank" href={href}>{children}</a>;
  }
  
  export default ExternalLink;
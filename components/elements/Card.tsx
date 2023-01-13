function Card ({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`border border-black rounded-md p-6 ${className}`}>
      {children}
    </div>
  );
}

export default Card;
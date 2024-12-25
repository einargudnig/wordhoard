export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1>Header</h1>
      <p>hello from Layout file</p>
      {children}
      <h1>Footer</h1>
    </div>
  );
}

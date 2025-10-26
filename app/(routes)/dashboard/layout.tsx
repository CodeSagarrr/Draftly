

function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <div className="bg-white w-screen">{children}</div>
    </>
  )
}
export default RootLayout
export function DefaultLayoutRoad(){
    return(
        <main className="flex  gap-5 bg-background h-screen ">
          <div>
            <h1>Header</h1>
          </div>
            <Outlet />
        </main>
    )
}
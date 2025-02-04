import { useEffect, useState } from "react"
import { Roles } from "./components/Roles/Roles"

import { IRole } from "./components/Roles/IRoles"
function App() {
  const [fetchedRoles, setRoles] = useState<IRole[]>();
  const [_isLoading, setLoader] = useState<Boolean>(false)
  useEffect(() => {

    const fetchData = async () => {
      try {
        setLoader(true)

        const response = await fetch("http://localhost:4000/api/roles");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();

        setRoles(result.roles)

      } catch (error) {
        console.log(error)
      }

    };

    fetchData();

  }, []);

  useEffect(() => {
    setLoader(false)

  }, [fetchedRoles]);


  return (
    <>
      <Roles roles={fetchedRoles ?? []} />
    </>
  )
}

export default App

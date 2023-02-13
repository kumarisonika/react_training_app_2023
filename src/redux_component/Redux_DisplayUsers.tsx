import { Button, Typography } from '@mui/material';
import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removeUser } from '../store/slices/UserSlice';


export default function Redux_DisplayUsers() {

  const dispatch = useDispatch()
  const data =  useSelector((state:any)=>{
    return state.user;
  })

  console.log(data,"this is in displayUser")

  const deleteUser = (id:number) =>{
    dispatch(removeUser(id))
  }

  return (
    <div>
      {
        data.map((user:any, id:any) => {
          return <li key={id}>
             <Typography component="h1" variant="h4" >
            {user}
            </Typography>

            <Button
            onClick={() => deleteUser(id)}
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Delete
            </Button>
          </li>
        })
      }
    </div>
  )
}

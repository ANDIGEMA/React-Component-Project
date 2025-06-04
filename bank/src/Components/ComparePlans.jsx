import Table from 'react-bootstrap/Table';
import {FaCheck} from 'react-icons/fa';
function ComparePlans() {
  return (
    <>
    {/* Small Devices */}
  <div className=" container-fluid d-lg-none d-md-none d-sm-block">
  <h1 className="fw-light text-center mt-5 pt-5">Compare plans</h1>
   
    <Table  className="mt-5 mb-5">
  
      <thead>
        <tr>
          <th></th>
          <th>Free </th>
          <th>Pro</th>
          <th>Enterprise</th>
        </tr>
      </thead>
      <tbody>

        {/* First */}
        <tr>
        <th>Public </th>
          <td> <FaCheck size="15px" color="black"/></td>
          <td><FaCheck size="15px" color="black"/></td>
          <td><FaCheck size="15px" color="black"/></td>
        </tr>


        {/* Second */}
        <tr>
        <th>Private</th>
          <td></td>
          <td><FaCheck size="15px" color="black"/></td>
          <td><FaCheck size="15px" color="black"/></td>
        </tr>


        {/* Third */}
        <tr>
        <th>Permission</th>
          <td><FaCheck size="15px" color="black"/></td>
          <td><FaCheck size="15px" color="black"/></td>
          <td><FaCheck size="15px" color="black"/></td> 
        </tr>


      {/* Fourth */}
        <tr>
        <th>Sharing</th>
          <td> </td>
          <td><FaCheck size="15px" color="black"/></td>
          <td><FaCheck size="15px" color="black"/></td>   
        </tr>

      {/* Five */}
        <tr>
        <th>Unlimited members</th>
          <td> </td>
          <td><FaCheck size="15px" color="black"/></td>
          <td><FaCheck size="15px" color="black"/></td>
         
          
        </tr>

      {/* Sixth */}
        <tr>
        <th>Extra Security</th>
          <td> </td>
          <td> </td>
          <td><FaCheck size="15px" color="black"/></td>
        </tr>
      </tbody>
    </Table>
    </div>





     {/*Desktop Devices */}
  <div className="w-75 container d-none d-lg-block ">
  <h1 className="fw-light text-center mt-5 pt-5">Compare plans</h1>
   
    <Table  className="mt-5 mb-5">
  
      <thead>
        <tr>
          <th></th>
          <th>Free </th>
          <th>Pro</th>
          <th>Enterprise</th>
        </tr>
      </thead>
      <tbody>

        {/* First */}
        <tr>
        <th>Public </th>
          <td> <FaCheck size="15px" color="black"/></td>
          <td><FaCheck size="15px" color="black"/></td>
          <td><FaCheck size="15px" color="black"/></td>
        </tr>


        {/* Second */}
        <tr>
        <th>Private</th>
          <td></td>
          <td><FaCheck size="15px" color="black"/></td>
          <td><FaCheck size="15px" color="black"/></td>
        </tr>


        {/* Third */}
        <tr>
        <th>Permission</th>
          <td><FaCheck size="15px" color="black"/></td>
          <td><FaCheck size="15px" color="black"/></td>
          <td><FaCheck size="15px" color="black"/></td> 
        </tr>


      {/* Fourth */}
        <tr>
        <th>Sharing</th>
          <td> </td>
          <td><FaCheck size="15px" color="black"/></td>
          <td><FaCheck size="15px" color="black"/></td>   
        </tr>

      {/* Five */}
        <tr>
        <th>Unlimited members</th>
          <td> </td>
          <td><FaCheck size="15px" color="black"/></td>
          <td><FaCheck size="15px" color="black"/></td>
         
          
        </tr>

      {/* Sixth */}
        <tr>
        <th>Extra Security</th>
          <td> </td>
          <td> </td>
          <td><FaCheck size="15px" color="black"/></td>
        </tr>
      </tbody>
    </Table>
    </div>
    </>
  )
}

export default ComparePlans;
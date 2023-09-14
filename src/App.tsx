import React, { useState } from 'react';
import HighLightedText from './components/HighLightedText';

const App = () => {
  const [inputVal, setInputVal] = useState('');

  const p = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, quod ut ullam repellendus repellat debitis asperiores mollitia sunt ex assumenda dicta cumque soluta, accusantium sed eaque. Illum possimus et quibusdam quis eius doloribus optio, impedit, nobis veniam harum placeat repellendus, facere at quia voluptates? Similique quaerat iure cumque quibusdam dolore quidem voluptate reiciendis autem quod. Aliquam consequatur exercitationem quo ratione dolorem, dolore expedita libero commodi quisquam id qui amet facere illo eius sunt omnis non distinctio iure totam assumenda corrupti? Aspernatur similique sapiente enim cum excepturi aperiam, necessitatibus dolorem culpa ipsa exercitationem magnam laborum nisi aut explicabo maiores ut et id ducimus consequatur voluptatem corrupti! Commodi nulla eligendi qui culpa saepe ipsa, minus, aliquam porro, reiciendis recusandae labore officiis corrupti omnis? Reiciendis dignissimos explicabo necessitatibus ducimus ut. Nihil quis tenetur illum dicta magni dignissimos quidem numquam veritatis quasi! Laboriosam quam odit, ratione earum aut minima, quos aliquam, explicabo quidem neque ipsam. Nostrum voluptatibus maiores ipsum facilis porro dicta architecto, aperiam adipisci quia iusto nisi eligendi, quo, perferendis harum numquam? Consequatur ea quibusdam eaque magni facilis nesciunt modi mollitia vel unde, cumque omnis debitis. Dolores consectetur nihil quae pariatur soluta libero nulla, sapiente repudiandae rerum natus minus fugiat! Velit, veritatis hic.';

  const p2 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, quod ut ullam repellendus repellat debitis asperiores mollitia sunt ex assumenda dicta cumque soluta, accusantium sed eaque. Illum possimus et quibusdam quis eius doloribus optio, impedit, nobis veniam harum placeat repellendus, facere at quia voluptates? Similique quaerat iure cumque quibusdam dolore quidem voluptate ';

  const changeHandler = (e:any)=>{
    setInputVal(e.target.value);
    
  }
  return (
    <div style={{display:"flex", justifyContent:'center', alignItems:'center', gap:'1rem',flexDirection:'column'}}>
      <h1>HighLight Text</h1>
      <input type="text" value={inputVal} onChange={changeHandler} style={{width:'500px',height:'40px', fontSize:'25px'}} />
      <div style={{width:'900px'}}>
        {/* <Compo value={p} highlight={inputVal} color="#D7BCE8" /> */}
        <HighLightedText value={p} highlight={inputVal} color="#D7BCE8" />
        <hr />
        <HighLightedText value={p2} highlight={inputVal} color="#E3B23C" />
      </div>
    </div>
  );
};

export default App;
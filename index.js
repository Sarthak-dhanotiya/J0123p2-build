// var task={
//     tasklist:[
//         {
//             image:"",
//             TaskTitle:"",
//             TaskType:"",
//             TaskDescription:""
//         },
//         {
//             image:"",
//             TaskTitle:"",
//             TaskType:"",
//             TaskDescription:""
//         },
//         {
//             image:"",
//             TaskTitle:"",
//             TaskType:"",
//             TaskDescription:""
//         },
//         {
//             image:"",
//             TaskTitle:"",
//             TaskType:"",
//             TaskDescription:""
//         },
//         {
//             image:"",
//             TaskTitle:"",
//             TaskType:"",
//             TaskDescription:""
//         },
//         {
//             image:"",
//             TaskTitle:"",
//             TaskType:"",
//             TaskDescription:""
//         },
//         {
//             image:"",
//             TaskTitle:"",
//             TaskType:"",
//             TaskDescription:""
//         },
//     ],
//  };

const state = {
    taskList: [],
  };

const firstclass=document.querySelector(".task__contents");
const taskModal=document.querySelector(".task__modal__body");






// template for the card on the screen


const HtmlTaskContent = ({ id, title, description, type, url }) => `
  <div class="col-md-6 col-lg-4 mt-3" id=${id} key=${id}>
    <div class='card shadow-sm task__card'>
    
      <div class='card-header d-flex justify-content-end task__card__header'>
          <button type='button' class='btn btn-outline-primary mr-1.5' name=${id}>
              <i class="fa-solid fa-pencil name=${id}"></i>
           
          </button>
           <button type='button' class='btn btn-outline-danger mr-1.5' name=${id}  onclick="deletetask.apply(this, arguments)">
              <i class='fas fa-trash-alt name=${id}'></i>
          </button>
      </div>
      <div class='card-body'>
          ${
            url 
             ? `<img width='100%' src=${url} alt='Card Image' class='card-img-top md-3 rounded-lg' />`
             : `<img width='100%' src="https://tse1.mm.bing.net/th?id=OIP.UEd53CjfCWxaOteNmR6P6wHaHa&pid=Api&rs=1&c=1&qlt=95&h=180" alt='Card Image' class='img-fluid place__holder__image mb-3' />`
          }
          <h4 class='card-title task__card__title'>${title}</h4>
          <p class='description trim-3-lines text-muted'>${description}</p>
          <div class='tags text-white d-flex flex-wrap'>
            <span $ class='badge bg-primary m-1'>${type}</span>
          </div>
      </div>
      <div class='card-footer'>
          <button type='button' class='btn btn-outline-primary float-right' data-bs-toggle="modal"  data-bs-target="#showTask" onclick='openTask.apply(this, arguments)' id=${id} >Open Task</button>
      </div>
    </div>
  </div>
`;

// modal body on>> clk of open Task

const Htmlmodalcontent=({id,title,description,url})=>{
    const date=new Date(parseInt(id));
    return`
    
    <div id=${id}>

    ${
       url 
             ? `<img width='100%' src=${url} alt='Card Image' class='card-img-top md-3 rounded-lg' />`
             : `<img width='100%' src="https://tse1.mm.bing.net/th?id=OIP.UEd53CjfCWxaOteNmR6P6wHaHa&pid=Api&rs=1&c=1&qlt=95&h=180" alt='Card Image' class='img-fluid place__holder__image mb-3' />`

    }

    <strong class='text-muted text-sm'> created on:${date.toDateString()}</strong>

    <h2 class="my-3">${title}</h2>
    <p class="text-muted">${description}</p>
    </div>
    `;
};

const localstoragedata=()=>{
    localStorage.setItem(
        "task",
        JSON.stringify({
         tasks:state.taskList,
        }
    )
);
};


const loadInitialData = () => {
  const localStorageCopy = JSON.parse(localStorage.task);

  if (localStorageCopy) state.taskList = localStorageCopy.tasks;

  state.taskList.map((cardDate) => {
    firstclass.insertAdjacentHTML("beforeend", HtmlTaskContent(cardDate));
  });
};


const handleSubmit = (event) => {
    // console.log("event triggerd");
    const id = `${Date.now()}`;
    const input = {
      url: document.getElementById("imageUrl").value,
      title: document.getElementById("TaskTitle").value,
      type: document.getElementById("TaskType").value,
      description: document.getElementById("description").value,
    };

    firstclass.insertAdjacentHTML(
        "beforeend",
        HtmlTaskContent({ ...input, id })
      );
      state.taskList.push({ ...input, id });

      localstoragedata();
    };



    // open task

    const openTask = (e) => {
      // if(!e) e= window.event;

      const getTask = state.taskList.find(({id}) => id ===  e.target.id);
      taskModal.innerHTML = Htmlmodalcontent(getTask);
 };



// delete task

const deletetask=(e)=>{

   
  const targetId = e.target.getAttribute("name");
  const type=e.target.tagName;

  const removetask= state.taskList.filter(({id})=> id!==targetId);

  localstoragedata();

  if(type ==="BUTTON"){
    return e.target.parentNode.parentNode.parentNode.parentNode.removeChild(
      e.target.parentNode.parentNode.parentNode
    );
  
  }  else if (type === "I") {
     return  e.target.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(
      e.target.parentNode.parentNode.parentNode.parentNode
    );
  }
  
    
};


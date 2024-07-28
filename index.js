var task={
    tasklist:[
        {
            image:"",
            TaskTitle:"",
            TaskType:"",
            TaskDescription:""
        },
        {
            image:"",
            TaskTitle:"",
            TaskType:"",
            TaskDescription:""
        },
        {
            image:"",
            TaskTitle:"",
            TaskType:"",
            TaskDescription:""
        },
        {
            image:"",
            TaskTitle:"",
            TaskType:"",
            TaskDescription:""
        },
        {
            image:"",
            TaskTitle:"",
            TaskType:"",
            TaskDescription:""
        },
        {
            image:"",
            TaskTitle:"",
            TaskType:"",
            TaskDescription:""
        },
        {
            image:"",
            TaskTitle:"",
            TaskType:"",
            TaskDescription:""
        }
    ]
};

const state = {
    taskList: [],
  };

const firstclass=document.querySelector(".modal-footer");
const secondclass=document.querySelector(".modal-body");

console.log(firstclass);
console.log(secondclass);




// template for the card on the screen

const HtmlTaskContent=({id,title,description,Type,url})=>`
<div class="col-md-6-col-lg-4 mt-3" id=${id}>

<div class="card-shadow">
<div class="task-header d-flex justify-content-end task-card-header">

<button type="button" class="btn btn-primary mr-1.5" name=${id}>
<i class="fas fa-pencil-alt name=${id}"></i>
</button>

<button type="button" class="btn btn-danger mr-1.5" name=${id}>
<i class="fas fa-trash-alt name=${id}"></i>
</button>
</div>


<div class="card-body">
${
    url &&
    `
    <img width='100%' src=${url} alt='card image' class="card-img-top"/>`
}

<h4 class="card-title">${title}</h4>

<p class="card-description">${description}</p>

          <div class='tags text-white d-flex flex-wrap'>
            <span> class='badge bg-primary m-1'${Type}</span>
          </div>

</div>


<div class="card-b=footer">
<button type="button" class="btn btn-outline-primary float-right" data-bs-toggle="modal" data-bs-target="#showtask">
open task</button>



</div>

</div>



</div>

`;


// modal body on>> clk of open Task

const htmlmodalcontent=({id,title,description,url})=>{
    const date=new date(parseInt(id));
    return`
    
    <div id=${id}>

    ${
        url &&
        `
        <img width='100%' src=${url} alt='card image' class="card-img-top"/>`
    }

    <strong class='text-muted text-sm'> created on:${date.toDateString()}</strong>

    <h2 class="my-3">${title}</h2>
    <p class="text-muted">${description}</p>
    </div>
    `;
};















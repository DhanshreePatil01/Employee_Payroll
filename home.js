window.addEventListener('DOMContentLoaded',(event) => {
      createInnerHtml();
});

const createInnerHtml=() => {
    const headerHtml=" <th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th>"+
                     "<th>Start Date</th><th>Actions</th>"
    let innerHtml= `${headerHtml}`;
    let empPayrollList = creteEmployeePayrollJSON();
    for(const empPayrollData of empPayrollList){
        innerHtml =`${innerHtml}
    
        <tr>
            <td><img class="profile" alt="profile1" src="${empPayrollData._profilePic}"></td>
            <td>${empPayrollData._name}</td>
            <td>${empPayrollData._gender}</td>
            <td>${getDeptHtml(empPayrollData._department)}</td>
            <td><${empPayrollData._salary}</td>
            <td>${empPayrollData._startDate}</td>  
            <td>
                <img name="${empPayrollData._id}" onclick="remove(this)" alt="delete"
                     src="Photo/delete.png">
                <img name="${empPayrollData._id}" onclick="update(this)" alt="edit"
                     src="Photo/Update1.png">     
            </td>  
        </tr>
        `
        ;
    }
        document.querySelector('#table-display').innerHTML=innerHtml;
}

const getDeptHtml = (deptList) => {
    let deptHtml ='';
    for(const dept of deptList){
        deptHtml = `${deptHtml} <div class='dept-label'>${dept}</div>`
    }
    return deptHtml;
}

const creteEmployeePayrollJSON = () => {
    let empPayrollListLocal = [
     {
        _name:'Dhanshree Patil',
        _gender:'Female',
        _department:[
            'Engineering',
            'Finance'
        ],
        _salary:'400000',
        _startDate:'1 Jul 2020',
        _note:'',
        _id:new Date().getTime(),
        _profilePic:'Photo/Profile1.png'
     },
     {
        _name:'Narayan Mahadevan',
        _gender:'Male',
        _department:[
            'HR'
        ],
        _salary:'450000',
        _startDate:'15 Sep 2019',
        _note:'',
        _id:new Date().getTime()+1,
        _profilePic:'Photo/Profile2.png'
     },
     {
        _name:'Chetna Umredkar',
        _gender:'Female',
        _department:[
            'Finance',
            'Sales'
        ],
        _salary:'500000',
        _startDate:'1 Oct 2020',
        _note:'',
        _id:new Date().getTime()+2,
        _profilePic:'Photo/Profile3.png'
     },
     {
        _name:'Shivaji Patil',
        _gender:'Male',
        _department:[
            'Engineering',
            'Finance',
            'Sales'
        ],
        _salary:'400000',
        _startDate:'10 Jul 2018',
        _note:'',
        _id:new Date().getTime()+3,
        _profilePic:'Photo/Profile4.png'
     },
     {
        _name:'Poonam Mane',
        _gender:'Female',
        _department:[
            'Sales'
        ],
        _salary:'300000',
        _startDate:'30 Dec 2017',
        _note:'',
        _id:new Date().getTime()+4,
        _profilePic:'Photo/Profile5.png'
     },
     {
        _name:'Omprasad Patil',
        _gender:'Male',
        _department:[
            'Engineering',
            'HR'
        ],
        _salary:'500000',
        _startDate:'12 Mar 2019',
        _note:'',
        _id:new Date().getTime()+5,
        _profilePic:'Photo/Profile6.png'
     },
    ];
    return empPayrollListLocal;
}
const supabaseApi = supabase.createClient('https://ubdfphgftdztmmfqoxmf.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InViZGZwaGdmdGR6dG1tZnFveG1mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIxNzgwMDMsImV4cCI6MjA3Nzc1NDAwM30.SxvGOhgEIOTDXNajche0unZy4FfHFocaZVOW3lYh4H0')

let userEmail = localStorage.getItem('userEmail');
let userName = localStorage.getItem('userName');

let stopFunctionFlg = true;

// LogOut Query/Function____________________________
const logOutUser = async () => {
    const { error } = await supabaseApi.auth.signOut()
    if (error) {
        console.log(error)
    }
    else {
        localStorage.removeItem('userEmail');
        localStorage.removeItem('userName');
        stopFunctionFlg = false;
        Swal.fire({
            title: "SignOut Successfully",
            icon: "success",
            showConfirmButton: false,
            timer: 1500
        });
        setTimeout(() => {
            window.location.reload()
            window.location.href = '/allPages/auth/login/login.html';
        }, 1500);
    }
}

const loginBtn = document.getElementById('loginBtn');

// Initially check that User is loggedin or not_____________________________

const isUserLoggedIn = async () => {
    const { data: { session }, error } = await supabaseApi.auth.getSession()

    if (!stopFunctionFlg) {
        return
    }

    if (session === null) {
        Swal.fire({
            title: "User isn't log in",
            icon: "error",
            showConfirmButton: false,
            timer: 1000
        });
        setTimeout(() => {
            window.location.href = '/allPages/auth/login/login.html';
        }, 1000);
        localStorage.removeItem('userEmail');
        localStorage.removeItem('userName');
        return
    }

    // After checking that session is not empty create a signout button______________________________
    loginBtn.innerHTML = `<a href="#" class="navLinks lastLink" id="signout">Signout <svg class="portal"></svg></a>`
    const signoutBtn = document.getElementById('signout');
    signoutBtn.addEventListener('click', async e => {
        e.preventDefault()
        await logOutUser()
    })

}

isUserLoggedIn()

// Set Inputs value dynamically_____________________________________________
const usrName = document.getElementById('name').value = userName;
const email = document.getElementById('email');
email.value = userEmail;

email.disabled = true




// Get Doctor________________________________________________
const checkDoc = () => {
    const doctor = document.getElementById('doctor');
    
    console.log(doctor.value);
}
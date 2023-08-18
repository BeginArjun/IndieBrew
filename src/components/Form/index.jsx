export default function SignUpForm(){
    return(
        <div className="flex flex-col bg-white p-4 rounded-md shadow-md gap-4">
            <h1 className="text-3xl font-extrabold">Create your IndieBrew Account</h1>
            <form className="flex flex-col gap-8 justify-around">
                <label className="text-lg font-bold" for="email">Email</label>
                <input type="email" name="email" id="email" placeholder="john@example.com" required/>
                <label className="text-lg font-bold" for="name">Full Name</label>
                <input type="text" name="fullname" id="name" placeholder="John Doe" required/>
                <label className="text-lg font-bold" for="password">Password</label>
                <input type="password" name="password" id="password" placeholder="At least 8 characters" minLength="8" required/>
                <div>
                <input type="checkbox" name="checkbox" id="check" required/>
                <label for="check">
                    By creating an account on IndieBrew, you agree 
                    to the 
                    <span className="underline text-[#664efc]">Terms & Conditions</span>
                </label>
                </div>
                <input type="submit" value="Create An Account" className="bg-[#664efc] p-4 rounded-lg text-white"/>
            </form>
        </div>
    )
}
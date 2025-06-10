export default function Home(){
const MYDEMO =process.env.NEXT_PUBLIC_PROMPT;
return(
  <div style ={{textAlign: 'center',marginTop: '45px'}}>
    <h1 >{MYDEMO}</h1>
    <p>this for my demo exporting data from env file</p>
    </div>
);
}


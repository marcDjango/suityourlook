// import React from "react";
// import { Form, redirect } from "react-router-dom";
// import Input from "../../components/Input-R/Input";
// import "./Register.scss";

// function Register() {
//   return (
//     <div className="register-page">
//       <div className="register-input">
//         <h1 className="register-title">Créer un compte</h1>
//         <Form className="form" method="post" action="/register" replace>
//           <Input
//             className="input"
//             labelName="firstname"
//             type="firstname"
//             labelText="Prénom :"
//             maxLength="45"
//           />
//           <Input
//             className="input"
//             labelName="lastname"
//             type="lastname"
//             labelText="Nom :"
//             maxLength="45"
//           />
//           <Input
//             className="input"
//             labelName="email"
//             type="email"
//             labelText="Email :"
//             maxLength="45"
//           />
//           <Input
//             className="input"
//             labelName="password"
//             type="password"
//             labelText="Mot de passe :"
//             maxLength="255"
//           />
//           <Input
//             className="input"
//             labelName="passwordConfirme"
//             type="password"
//             labelText="Confirmation mdp :"
//             maxLength="255"
//           />
//           <label className="label" htmlFor="genre">
//             Genre :
//             <select className="select" name="genre" id="genre">
//               <option>Mr</option>
//               <option>Mme</option>
//             </select>
//           </label>
//           <Input
//             className="input"
//             labelName="phone"
//             type="phone"
//             labelText="Numéros de téléphone :"
//             maxLength="10"
//           />

//           <button className="continue" type="submit">
//             INSCRIPTION
//           </button>
//         </Form>
//       </div>
//     </div>
//   );
// }
// export default Register;

// export const enrolment = async ({ request }) => {
//   const form = await request.formData();

//   const data = Object.fromEntries(form);

//   const formData = {
//     ...data,
//     is_admin: 0,
//   };
//   if (formData.genre === "Mr") {
//     formData.genre = 1;
//   } else {
//     formData.genre = 0;
//   }

//   try {
//     const response = await fetch(
//       `${import.meta.env.VITE_BACKEND_URL}/api/users`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       }
//     );
//     if (data.password !== data.passwordconfirme) {
//       throw new Error(
//         "Le mot de passe ou l'adresse e-mail que vous avez entré est incorrect. Veuillez vérifier vos informations et réessayer. Assurez-vous que votre adresse e-mail est correctement saisie et que le mot de passe respecte les critères requis."
//       );
//     }

//     if (!response.ok) {
//       throw new Error("cant fetch user");
//     }
//     return redirect("/");
//   } catch (error) {
//     console.error(error);
//     return redirect("/register");
//   }
// };

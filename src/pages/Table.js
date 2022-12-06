// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import "../style/Table.css";

// function Table() {
//   const [buku, setBuku] = useState([]); //State berfungsi untuk menyimpan data sementara
//   const [judul, setJudul] = useState("");
//   const [deskripsi, setDeskripsi] = useState("");
//   const [tahunTerbit, setTahunTerbit] = useState("");
//   const [pengarang, setPengarang] = useState("");
//   const [bookId, setBookId] = useState(0);

//   const getAllBuku = async () => {
//     await axios
//       .get(" http://localhost:8000/daftarBuku")
//       .then((response) => {
//         setBuku(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   const getBukuById = (book) => {
//     setBookId(book.id);
//     setJudul(book.judul);
//     setDeskripsi(book.deskripsi);
//     setPengarang(book.pengarang);
//     setTahunTerbit(book.tahunTerbit)
//   };

//   const updateBuku = async (e) => {
//     e.preventDefault();
//     await axios
//       .put("http://localhost:8000/daftarBuku/" + bookId, {
//         judul: judul,
//         deskripsi: deskripsi,
//         pengarang: pengarang,
//         tahunTerbit: tahunTerbit
//       })
//       .then(() => {
//         setBookId(0);
//         alert("sukses");
//         window.location.reload();
//       })
//       .catch((err) => {
//         alert(err);
//         console.log(err);
//       });
//   };

//   const deleteBuku = async (id) => {
//     await axios.delete("http://localhost:8000/daftarBuku/" + id).then(() => {
//       alert("sukses hapus!");
//     });
//     window.location.reload();
//   };

//   useEffect(() => {
//     getAllBuku();
//   }, []);
//   return (
//     <div>
//       <div>
//         <h1>Form Edit Buku</h1>
//         <form onSubmit={updateBuku}>
//           <div className="input">
//             <label htmlFor="judul">Judul: </label>
//             <input
//               type="text"
//               name="judul"
//               id="judul"
//               value={judul}
//               onChange={(e) => setJudul(e.target.value)}
//               required
//             />
//           </div>
//           <div className="input">
//             <label htmlFor="deskripsi">Deskripsi: </label>
//             <input
//               type="text"
//               name="deskripsi"
//               id="deskripsi"
//               value={deskripsi}
//               onChange={(e) => setDeskripsi(e.target.value)}
//               required
//             />
//           </div>
//           <div className="input">
//             <label htmlFor="pengarang">Pengarang: </label>
//             <input
//               type="text"
//               name="pengarang"
//               id="pengarang"
//               value={pengarang}
//               onChange={(e) => setPengarang(e.target.value)}
//               required
//             />
//           </div>
//           <div className="input">
//             <label htmlFor="tahunTerbit">Tahun Terbit: </label>
//             <input
//               type="date"
//               name="tahunTerbit"
//               id="tahunTerbit"
//               value={tahunTerbit}
//               onChange={(e) => setTahunTerbit(e.target.value)}
//               required
//             />
//           </div>
//           <br />
//           <button type="submit">update</button>
//         </form>
//       </div>
//       <div className="daftar">
//         <h1>Daftar Buku</h1>
//         <table>
//           <thead>
//             <tr>
//               <th>No</th>
//               <th>Judul</th>
//               <th>Deskripsi</th>
//               <th>Tahun Terbit</th>
//               <th>Pengarang</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {buku.map((book, index) => {
//               return (
//                 <tr key={book.id}>
//                   <td>{index + 1}</td>
//                   <td>{book.judul}</td>
//                   <td>{book.deskripsi}</td>
//                   <td>{book.tahunTerbit}</td>
//                   <td>{book.pengarang}</td>
//                   <td>
//                     <button className="edit" onClick={() => getBukuById(book)}>
//                       Edit
//                     </button>{" "}
//                     ||{" "}
//                     <button
//                       className="delete"
//                       onClick={() => deleteBuku(book.id)}
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default Table;

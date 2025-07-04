import "./style.css";
import { fetchData } from "./api";

const app = document.getElementById("app");
const url_api = "http://localhost:3000/products";

const viewProducts = async () => {
  const products = await fetchData(url_api);
  const tb = document.getElementById("tb"); // Tbody
  products.forEach((p, i) => {
    const tr = document.createElement("tr"); // Trow
    i % 2 === 0 ? tr.classList.add("td_dark") : tr.classList.add("td_white");
    tr.innerHTML = `
        <td>${p.id}</td>
        <td>${p.name}</td>
        <td>$ ${p.price}</td>
        <td>${p.categorie}</td>
        <td>${p.stock}</td>
        <td>${p.status}</td>
        <td>
            <button>
                Editar
            </button>
            <button>
                ver
            </button>
            <button>
                Eliminar
            </button>
        </td>
    `;
    tb.appendChild(tr);
  });
};

// Method POST
const addProduct = (product) => {};

// Method PUT / PATCH
const updateProduct = (id) => {};

// Method Delete
const deleteProduct = (id) => {};

document.addEventListener("DOMContentLoaded", viewProducts());

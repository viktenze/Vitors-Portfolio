body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #f4f4f9;
    overflow-x: hidden;
}

.hero {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: #333;
    color: white;
    text-align: center;
}

.hero .arrow {
    width: 30px;
    height: 30px;
    border: solid white;
    border-width: 0 5px 5px 0;
    display: inline-block;
    padding: 10px;
    transform: rotate(45deg);
    animation: bounce 1s infinite;
    margin-top: 20px;
}

@keyframes bounce {
    0%, 100% {
        transform: rotate(45deg) translateY(0);
    }
    50% {
        transform: rotate(45deg) translateY(10px);
    }
}

#content {
    padding: 50px;
    display: flex;
    flex-direction: column;
    gap: 50px;
}

.section {
    padding: 20px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transform: translateY(50px);
    opacity: 0;
    transition: all 0.5s ease-out;
}

.section h2 {
    margin-top: 0;
}

.section a {
    color: #333;
    text-decoration: none;
    font-weight: bold;
}

.section.show {
    transform: translateY(0);
    opacity: 1;
}
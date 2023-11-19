import React, { useEffect, useRef } from "react";
import styled from "@emotion/styled";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  .card {
    background-color: white;
    border: 1px solid black;
    border-radius: 0.25rem;
    padding: 0.5rem;
    transform: translateX(100px);
    opacity: 0;
    transition: 150ms;
  }
  .card.show {
    transform: translateX(0);
    opacity: 1;
  }
`;

const InfinityScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("show", entry.isIntersecting);
        });
      },
      { rootMargin: "50px" }
    );

    const lastCardObserver = new IntersectionObserver((entries) => {
      const lastCard = entries[0];
      if (!lastCard.isIntersecting) return;
      loadNewCard();
      lastCardObserver.disconnect();
      lastCardObserver.observe(document.querySelector(".card:last-child")!);
    });

    const loadNewCard = () => {
      for (let i = 0; i < 10; i++) {
        const card = document.createElement("div");
        card.textContent = "New Card";
        card.classList.add("card");
        observer.observe(card);
        containerRef.current?.appendChild(card);
      }
    };

    if (containerRef.current) {
      const cards = containerRef.current.querySelectorAll(".card");
      cards.forEach((card) => observer.observe(card));
      lastCardObserver.observe(cards[cards.length - 1]);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <CardContainer ref={containerRef}>
      <div className="card">this is the first card</div>
      <div className="card">this is a card</div>
      <div className="card">this is a card</div>
      <div className="card">this is a card</div>
      <div className="card">this is a card</div>
      <div className="card">this is a card</div>
      <div className="card">this is a card</div>
      <div className="card">this is a card</div>
      <div className="card">this is a card</div>
      <div className="card">this is a card</div>
      <div className="card">this is a card</div>
      <div className="card">this is a card</div>
      <div className="card">this is a card</div>
      <div className="card">this is the last card</div>
    </CardContainer>
  );
};

export default InfinityScroll;

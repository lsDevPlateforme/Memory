import { CircleHelp } from "lucide-react";
import { buttonVariants } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

export const HelpModal = () => {
  return (
    <Dialog>
      <DialogTrigger
        className={buttonVariants({ variant: "outline", size: "icon" })}
      >
        {" "}
        <CircleHelp className="h-4 w-4" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Règles du Jeu de Memory</DialogTitle>
          <DialogDescription>
            <strong>Objectif :</strong> Trouver toutes les paires de cartes le
            plus rapidement possible.
          </DialogDescription>
        </DialogHeader>
        <ol>
          <li className="mb-3">
            <strong>Préparation :</strong>
            <ul>
              <li>
                Le jeu commence avec toutes les cartes disposées face cachée sur
                le plateau.
              </li>
            </ul>
          </li>
          <li className="mb-3">
            <strong>Jouer :</strong>
            <ul>
              <li>
                À chaque tour, le joueur clique sur deux cartes pour les
                retourner.
              </li>
              <li>
                Si les cartes retournées forment une paire (c'est-à-dire, si
                elles ont le même motif), elles restent face visible.
              </li>
              <li>
                Si les cartes ne forment pas une paire, elles sont retournées à
                nouveau face cachée après un court délai pour permettre au
                joueur de mémoriser leur position et leur motif.
              </li>
            </ul>
          </li>
          <li>
            <strong>Fin du jeu :</strong>
            <ul>
              <li>
                Le jeu continue jusqu'à ce que toutes les paires soient
                trouvées.
              </li>
              <li>
                Le joueur gagne lorsque toutes les cartes sont retournées face
                visible.
              </li>
            </ul>
          </li>
        </ol>
      </DialogContent>
    </Dialog>
  );
};

import type { Metadata } from "next";
import { Button, IconButton, LinkButton } from "@/components/ui/button";
import {
  Accordion,
  Breadcrumbs,
  ComparisonRow,
  ComparisonTable,
  FilterButton,
  Switch,
  ToggleChip,
} from "@/components/ui/controls";
import { Alert, Badge, DemoTag, Skeleton, Spinner, Tag } from "@/components/ui/feedback";
import { Checkbox, SearchField, Select, TextArea, TextField } from "@/components/ui/form";
import { Icon } from "@/components/ui/icon";
import { Container, Section } from "@/components/ui/layout";
import { ArrowLink, TextLink } from "@/components/ui/links";
import { Lockup, SxMark, Wordmark } from "@/components/ui/logo";
import { CardArrow, SectorGround, Surface } from "@/components/ui/surface";
import { Tabs } from "@/components/ui/tabs";
import { Eyebrow, GradientText, Heading, MaskedHeading } from "@/components/ui/typography";

export const metadata: Metadata = {
  title: "UI gallery — SimpleX",
  robots: { index: false, follow: false },
};

/**
 * Development and test harness, in place of Storybook. The .gallery.tsx extension means this file
 * is a route only when ENABLE_UI_GALLERY=true at build time: production builds do not contain it.
 * Strings are test fixtures, so they are not translated.
 */
export default function UiGalleryPage() {
  return (
    <main style={{ paddingTop: 140 }}>
      <Section size="sm">
        <Container className="stack gap-6">
          <Heading level={1} look="h3">
            UI gallery
          </Heading>

          <div className="wrap-row gap-3">
            <div data-spec="btn-primary">
              <Button arrow>Start a Project</Button>
            </div>
            <div data-spec="btn-sm">
              <Button size="sm">Small</Button>
            </div>
            <div data-spec="btn-lg">
              <Button size="lg">Large</Button>
            </div>
            <div data-spec="btn-disabled">
              <Button disabled>Disabled</Button>
            </div>
            <div data-spec="btn-loading">
              <Button loading>Sending…</Button>
            </div>
            <div data-spec="btn-ghost">
              <Button variant="ghost">Ghost</Button>
            </div>
            <div data-spec="btn-light">
              <Button variant="light">Light</Button>
            </div>
            <div data-spec="btn-glass">
              <Button variant="glass">Glass</Button>
            </div>
            <div data-spec="btn-icon">
              <IconButton label="Copy link">
                <Icon name="link" size="md" />
              </IconButton>
            </div>
            <LinkButton href="/" variant="ghost">
              Working link
            </LinkButton>
            <LinkButton href="/contact" variant="ghost">
              Route with no page
            </LinkButton>
          </div>

          <div className="wrap-row gap-5">
            <div data-spec="link-arrow">
              <ArrowLink href="/">Arrow link</ArrowLink>
            </div>
            <div data-spec="text-link">
              <TextLink href="/">Text link</TextLink>
            </div>
          </div>

          <div className="stack gap-3">
            <div data-spec="t-display">
              <Heading level={2} look="display">
                Display
              </Heading>
            </div>
            <div data-spec="t-h1">
              <Heading level={2} look="h1">
                Heading one
              </Heading>
            </div>
            <div data-spec="t-h2">
              <Heading level={2} look="h2">
                Heading two
              </Heading>
            </div>
            <div data-spec="t-h3">
              <Heading level={2} look="h3">
                Heading three
              </Heading>
            </div>
            <div data-spec="t-h4">
              <Heading level={2} look="h4">
                Heading four
              </Heading>
            </div>
            <div data-spec="t-h5">
              <Heading level={2} look="h5">
                Heading five
              </Heading>
            </div>
            <div data-spec="t-lead">
              <p className="t-lead">Lead text</p>
            </div>
            <div data-spec="t-body">
              <p className="t-body">Body text</p>
            </div>
            <div data-spec="t-small">
              <p className="t-small">Small text</p>
            </div>
            <div data-spec="t-xs">
              <p className="t-xs">Extra small text</p>
            </div>
            <div data-spec="t-mono">
              <p className="t-mono">Mono label</p>
            </div>
            <div data-spec="eyebrow">
              <Eyebrow>Eyebrow</Eyebrow>
            </div>
            <div data-spec="t-grad">
              <p className="t-h2">
                <GradientText>Gradient</GradientText>
              </p>
            </div>
            <MaskedHeading
              level={2}
              look="h2"
              lines={[{ text: "First line." }, { text: "Second line.", gradient: true }]}
            />
          </div>

          <div className="grid-2" style={{ gap: 18 }}>
            <div data-spec="input">
              <TextField id="g1" label="Work email" type="email" placeholder="you@company.com" />
            </div>
            <div data-spec="input-error">
              <TextField
                id="g2"
                label="Work email"
                type="email"
                error="Enter a complete email"
                defaultValue="alex@"
              />
            </div>
            <div data-spec="input-valid">
              <TextField id="g3" label="Company" valid defaultValue="Northwind Labs" />
            </div>
            <div data-spec="input-disabled">
              <TextField id="g4" label="Company" disabled help="Disabled" />
            </div>
            <div data-spec="select">
              <Select id="g5" label="Budget range" hint="Optional">
                <option>Not sure yet</option>
              </Select>
            </div>
            <div data-spec="textarea">
              <TextArea id="g6" label="Project description" />
            </div>
            <div data-spec="check">
              <Checkbox id="g7" label="I agree" />
            </div>
            <div data-spec="check-error">
              <Checkbox id="g8" label="Consent" error="Please confirm so we can reply" />
            </div>
            <div data-spec="search">
              <SearchField id="g9" label="Search" placeholder="Search insights" />
            </div>
          </div>

          <div className="wrap-row gap-3">
            <div data-spec="chip-off">
              <ToggleChip pressed={false}>Custom Software</ToggleChip>
            </div>
            <div data-spec="chip-on">
              <ToggleChip pressed>Web &amp; Mobile</ToggleChip>
            </div>
            <div data-spec="filter-off">
              <FilterButton pressed={false} count={3}>
                All
              </FilterButton>
            </div>
            <div data-spec="filter-on">
              <FilterButton pressed count={3}>
                FinTech
              </FilterButton>
            </div>
            <div data-spec="switch-off">
              <Switch checked={false} label="Analytics" />
            </div>
            <div data-spec="switch-on">
              <Switch checked label="Essential" disabled />
            </div>
          </div>

          <div className="wrap-row gap-3">
            <div data-spec="tag">
              <Tag>Tag</Tag>
            </div>
            <div data-spec="badge">
              <Badge>Architecture</Badge>
            </div>
            <div data-spec="badge-new">
              <Badge isNew>New</Badge>
            </div>
            <div data-spec="tag-demo">
              <DemoTag>Demo project</DemoTag>
            </div>
            <div data-spec="spinner">
              <Spinner dark />
            </div>
          </div>

          <div className="stack gap-3">
            <div data-spec="alert-info">
              <Alert tone="info">Saved on this device.</Alert>
            </div>
            <div data-spec="alert-success">
              <Alert tone="success">Your message is with our team.</Alert>
            </div>
            <div data-spec="alert-error">
              <Alert tone="error">We couldn’t send your message.</Alert>
            </div>
            <div data-spec="skeleton">
              <Skeleton style={{ height: 14, width: "40%" }} />
            </div>
          </div>

          <div data-spec="crumbs">
            <Breadcrumbs
              label="Breadcrumb"
              items={[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "AI Engineering" },
              ]}
            />
          </div>

          <div data-spec="tabs" data-testid="tabs">
            <Tabs
              label="Technology categories"
              items={[
                { id: "frontend", label: "Frontend", panel: <p>Frontend panel</p> },
                { id: "backend", label: "Backend", panel: <p>Backend panel</p> },
                { id: "mobile", label: "Mobile", panel: <p>Mobile panel</p> },
              ]}
            />
          </div>

          <div data-spec="acc" data-testid="accordion">
            <Accordion summary="Who owns the code?">Answer text.</Accordion>
          </div>

          <div data-spec="cmp">
            <ComparisonTable label="Comparison">
              <ComparisonRow>
                <span>Feature</span>
                <span>A</span>
                <span>B</span>
                <span>C</span>
              </ComparisonRow>
            </ComparisonTable>
          </div>
        </Container>
      </Section>

      <Section size="sm" ground="mist">
        <Container className="grid-3">
          <div data-spec="glass">
            <Surface variant="glass" style={{ padding: 32 }}>
              Glass
            </Surface>
          </div>
          <div data-spec="solid">
            <Surface variant="solid" hover style={{ padding: 32 }}>
              Solid <CardArrow />
            </Surface>
          </div>
          <div data-spec="paper-card">
            <Surface variant="paper-card" style={{ padding: 32 }}>
              Paper
            </Surface>
          </div>
          <div data-spec="glass-frost">
            <Surface variant="glass-frost" style={{ padding: 32 }}>
              Frost
            </Surface>
          </div>
          <div data-spec="widget">
            <Surface variant="widget">Widget</Surface>
          </div>
          <div data-spec="lg">
            <Surface variant="liquid" style={{ padding: 32 }}>
              Liquid
            </Surface>
          </div>
        </Container>
      </Section>

      <Section size="sm" ground="ink">
        <Container className="grid-3">
          <div data-spec="glass-dark">
            <Surface variant="glass-dark" style={{ padding: 32 }}>
              Glass dark
            </Surface>
          </div>
          <div data-spec="widget-dark">
            <Surface variant="widget-dark">Widget dark</Surface>
          </div>
          <div data-spec="lg-dark">
            <Surface variant="liquid-dark" style={{ padding: 32 }}>
              Liquid dark
            </Surface>
          </div>
          <div data-spec="lg-graphite">
            <Surface variant="liquid-graphite" style={{ padding: 32 }}>
              Graphite
            </Surface>
          </div>
          <div data-spec="lg-cobalt">
            <Surface variant="liquid-cobalt" style={{ padding: 32 }}>
              Cobalt
            </Surface>
          </div>
          <div data-spec="viz-fintech">
            <SectorGround sector="fintech" style={{ height: 160 }} />
          </div>
        </Container>
      </Section>

      {(
        ["paper", "mist", "horizon", "spectrum", "cta", "mesh-light", "mesh-graphite"] as const
      ).map((ground) => (
        <div key={ground} data-spec={`ground-${ground}`}>
          <Section size="sm" ground={ground}>
            <Container>{ground}</Container>
          </Section>
        </div>
      ))}

      <Section size="sm" ground="ink">
        <Container className="wrap-row gap-6">
          <div data-spec="lockup-on-dark">
            <Lockup variant="on-dark" size={40} label="SimpleX" />
          </div>
          <div data-spec="wordmark-dark">
            <Wordmark size={40} label="SimpleX" />
          </div>
          <div data-spec="mark-on-dark">
            <SxMark variant="on-dark" size={64} label="SimpleX" />
          </div>
        </Container>
      </Section>
      <Section size="sm">
        <Container className="wrap-row gap-6">
          <div data-spec="lockup">
            <Lockup size={40} label="SimpleX" />
          </div>
          <div data-spec="lockup-steel">
            <Lockup variant="steel" size={40} label="SimpleX" />
          </div>
          <div data-spec="wordmark">
            <Wordmark size={40} label="SimpleX" />
          </div>
          <div data-spec="mark">
            <SxMark size={64} label="SimpleX" />
          </div>
          <div data-spec="mark-light">
            <SxMark variant="light" size={64} label="SimpleX" />
          </div>
          <div data-spec="mark-mono">
            <SxMark variant="mono" size={64} label="SimpleX" />
          </div>
          <div data-spec="mark-flat">
            <SxMark flat size={16} label="SimpleX" />
          </div>
        </Container>
      </Section>
    </main>
  );
}

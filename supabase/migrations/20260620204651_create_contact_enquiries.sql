CREATE TABLE IF NOT EXISTS contact_enquiries (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  department text NOT NULL DEFAULT 'general',
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_enquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "insert_contact_enquiries" ON contact_enquiries
  FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "select_contact_enquiries" ON contact_enquiries
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "update_contact_enquiries" ON contact_enquiries
  FOR UPDATE TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "delete_contact_enquiries" ON contact_enquiries
  FOR DELETE TO authenticated USING (true);
